import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  // Lấy Webhook Signing Secret từ biến môi trường
  const SIGNING_SECRET = process.env.CLERK_SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error('Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Tạo một instance của Svix Webhook với secret
  const wh = new Webhook(SIGNING_SECRET);

  // Lấy các header cần thiết từ request
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // Nếu một trong các header bị thiếu, trả về lỗi
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }

  // Lấy phần body của request
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Xác thực payload bằng các header và secret
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  // Xử lý sự kiện tại đây
  const eventType = evt.type

  if(eventType === "user.created"){
    const { data } = evt
    await db.insert(users).values({
      clerkId: data.id,
      name: `${data.first_name} ${data.last_name}`,
      imageURL: data.image_url,
    })
  }

  if(eventType === "user.deleted"){
    const { data } = evt
    if(!data.id){
      return new Response("Missing user id",{status: 400})
    }

    await db.delete(users).where(eq(users.clerkId , data.id))
  }

  if(eventType === "user.updated"){
    const {data} = evt
    await db
    .update(users)
    .set({
      name: `${data.first_name} ${data.last_name}`,
      imageURL: data.image_url,
    })
  }

  // Trả về phản hồi thành công
  return new Response('', { status: 200 });
}