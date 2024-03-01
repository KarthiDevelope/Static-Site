import { Carousel, Typography, Button } from "@material-tailwind/react";
 
const Banner =() => {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-96 w-full object-cover mb-10"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h5"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              About Us
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 "
            >
             
            </Typography>
            <div className="flex justify-center gap-2">
              <p className="text-white">Home > About us</p>
            </div>
          </div>
        </div>
      </div>
      
    </Carousel>
  );
}

export default Banner;