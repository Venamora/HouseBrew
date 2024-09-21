import React from 'react';
import Img2 from '../../assets/americano.png';
import styles from './Menu.css';

const MenuData = [
    {
        id: 1,
        img: Img2,
        name: 'Americano',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aosDelay: 100,
    },
    {
        id: 2,
        img: Img2,
        name: 'Latte',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aosDelay: 100,
    },
    {
        id: 3,
        img: Img2,
        name: 'Manual Brew',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aosDelay: 300,
    },
    {
        id: 4,
        img: Img2,
        name: 'Magic Brew',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        aosDelay: 400,
    },
];

const Menu = () => {
    return (
        <>
            <span id='menu'></span>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20">
                        <h1 className="text-4xl font-bold font-cursive text-gray-800">Our Menu's</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-6 place-items-center">
                        {MenuData.map((data, index) => (
                            <div
                                data-aos='fade-up'
                                data-aos-delay={data.aosDelay}
                                key={data.id}
                                className={styles.menuCard}
                            >
                                <img src={data.img} alt={data.name} className={styles.menuImage} />
                                <h1 className={styles.menuTitle}>{data.name}</h1>
                                <p className={styles.menuDescription}>{data.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
