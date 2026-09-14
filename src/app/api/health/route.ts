import { collection, getDocs, limit, query } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await getDocs(query(collection(firestore, "services"), limit(1)));
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
