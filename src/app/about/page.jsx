import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'DBBL|About Us',
  description: '...',
}

const AboutPage = () => {
    return (
        <div>
            <h2>About Uss</h2>
            <Image src={"/BurgerCat.jpg"} width={300} height="400" alt='funny Pic'></Image>
            <Image src={"/images/Cat.jpg"} width={300} height="500" alt='cat Pic'></Image>
            <Image src={"/images/pocha.jpeg"} width={300} height="400" alt='pocha Pic'></Image>
            <Image src="https://plus.unsplash.com/premium_photo-1776205955471-0a6d0e5c185d" width={400} height="600" alt='Girl with hijap Pic'></Image>
            <Image src="https://www.facebook.com/photo/" width={400} height="600" alt='My Pic'></Image>
        </div>
    );
};

export default AboutPage;