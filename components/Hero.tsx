"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';


const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
        Simplify and enhance your car rental journey through our user-friendly booking system. We've designed it to make your experience smoother and more convenient. With our streamlined process, you can effortlessly reserve the perfect vehicle for your needs. Our commitment to providing you with a hassle-free booking experience ensures that you can quickly secure the ideal car for your upcoming adventure or transportation needs, without any unnecessary complications.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}      
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt='hero' fill className='object-contain'
          />
          <div className="hero__image-overlay"/>
        </div>
      </div>
    </div>
  )
}

export default Hero