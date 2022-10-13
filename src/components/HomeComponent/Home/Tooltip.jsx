import { Tooltip, Button } from "@material-tailwind/react";
 
export  function CO2CalTool() {
  return (
    <Tooltip
    className="mt-[20px] w-[200px] p-5 font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"
      content="Calculate how much carbon emission you are producing by using our calculator"
      placement="bottom"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1" variant="gradient">Co2 Calculator</Button>
    </Tooltip>
  );
}
export  function EnergyTipTool() {
    return (
        <Tooltip
        className="font-poppins font-semibold w-[200px] p-5 text-white text-[18px] leading-[23.4px] mb-1"
          content="Check out how you can reduce your energy usage and help save the planet and money at the same time."
          placement="right"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Button className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1" variant="gradient">Energy Tips</Button>
        </Tooltip>
      );
  }
  export  function EnergyProTool() {
    return (
        <Tooltip
        className="font-poppins font-semibold w-[200px] p-5 text-white text-[18px] leading-[23.4px] mb-1"
          content="See the greenest energy companies in Victoria and how they contribute to a carbon neutral future"
          placement="bottom"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Button className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1" variant="gradient">Energy Provider</Button>
        </Tooltip>
      );
  }
  export  function CarbonOffTool() {
    return (
        <Tooltip
        className="font-poppins font-semibold w-[200px] p-5 text-white text-[18px] leading-[23.4px] mb-1"
          content="See the greenest energy companies in Victoria and how they contribute to a carbon neutral future"
          placement="right"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Button className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1" variant="gradient">Carbon Offset</Button>
        </Tooltip>
      );
  }