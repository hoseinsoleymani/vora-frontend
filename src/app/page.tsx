import { Button, Input } from "@/components/ui";

export default function Home() {
  return (
    <div className="text-red-100">
      <div className="pl-3">test div hello</div>

      <Button>Hello This is Button</Button>

      <Input
        label="Name"
        placeholder="Enter your name"
        leftIcon={<svg>👤</svg>}
      />

      <Input
        label="Email"
        placeholder="example@mail.com"
        variant="outline"
      />

      <Input
        label="Password"
        placeholder="*******"
        type="password"
        errorMessage="Password is too short"
      />
    </div>
  );
}
