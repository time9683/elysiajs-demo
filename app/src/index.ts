import { Elysia } from "elysia";

const app = new Elysia()
.use(
		cors({
			origin: (request) => {
				const origin = request.headers.get("origin");
				if (!origin) return true;
				if (
					origin.endsWith(".reizucomics.com") ||
					origin.includes("localhost") ||
					origin.includes("127.0.0.1")
				) {
					return true;
				}
				return false;
			},
			credentials: true,
			allowedHeaders: ["Content-Type", "Authorization", "Accept"],
			methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
		}),
	)
.get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
function cors(arg0: { origin: (request: any) => boolean; credentials: boolean; allowedHeaders: string[]; methods: string[]; }): any {
  throw new Error("Function not implemented.");
}

