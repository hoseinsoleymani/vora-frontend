import { Button, CustomCheckbox, Input, Slider , RadioGroup } from "@/components/ui";

export default function Home() {
  return (
    <div className="text-red-100">
      <Slider
        label="Price"
        defaultValue={[50]}
        max={100}
        step={1}
        variant="basic"
        type="single"
      />

      <Slider
        label="Flight duration"
        defaultValue={[20, 80]}
        max={100}
        step={1}
        variant="basic"
        type="double"
      />

      <Slider
        label="Layover"
        defaultValue={[30]}
        max={100}
        step={1}
        variant="gray"
        type="single"
      />

    </div>
  );
}
