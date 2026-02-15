import { NextResponse } from "next/server";

export default async function proxy(req) {
  // const {pathname}  = req.nextUrl;
  // console.log(pathname);
  // if (!pathname.startsWith("/api/feedback")) {
  //   return NextResponse.json(
  //     { message: "Not Found this page", status: 404 },
  //     { status: 404 },
  //   );
  // }

  // if (pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/foods", req.url));
  // }

  // return NextResponse.next();
}

export const config = {
  matcher: ["/about/:path*" ],
};
