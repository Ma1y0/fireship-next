import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface Props {
	targetId: string;
}

export default async function FollowButton({ targetId }: Props) {
	const session = await getServerSession(authOptions);

	if (session == null) {
		throw Error("no session");
	}

	const currentUserId = await prisma.user
		.findUnique({ where: { email: session?.user?.email! } })
		.then((user) => user?.id!);

	const isFollowing = await prisma.follows.findFirst({
		where: { followerId: currentUserId, followingId: targetId },
	});

	return <FollowClient targetUserId={targetId} isFollowing={!!isFollowing} />;
}
