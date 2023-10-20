/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */




exports.up = function (knex) {
    return knex('product').insert([
        {
            name: 'Product 1',
            price: '19.99',
            description: 'Description du produit 1',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'Outline Large Fit Jacket',
            price: '2,550$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'Deconstructed Jacket',
            price: '3,150$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'Minimal Tracksuit Jacket',
            price: '2,150$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'Oversized Trench Coat',
            price: '4,190$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'DIY College Light Bomber',
            price: '2,950$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'Balenciaga Back Hoodie Meduim Fit',
            price: '1,150$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: '38 Sports Icon Long Sleeve T-Shirt Oversized',
            price: '1,050$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: 'Balenciaga Long Sleeve T-Shirt Oversized',
            price: '725$',
            description: '',
            gender: 'M',
            type: 'Top',
            img: ''
        },
        {
            name: '3B Sports Icon Tracksuit Pants',
            price: '1,750$',
            description: '',
            gender: 'M',
            type: 'Bottom',
            img: ''
        },
        {
            name: 'Loose Fit Jeans',
            price: '1,190$',
            description: '',
            gender: 'M',
            type: 'Bottom',
            img: ''
        },
        {
            name: 'Offshore Baggy Sweatpants',
            price: '1,250$',
            description: '',
            gender: 'M',
            type: 'Bottom',
            img: ''
        },
        {
            name: 'Outline Baggy Sweapants',
            price: '1,080$',
            description: '',
            gender: 'M',
            type: 'Bottom',
            img: ''
        },
        {
            name: 'Relaxed Jeans',
            price: '1,350$',
            description: '',
            gender: 'M',
            type: 'Bottom',
            img: ''
        },
        {
            name: 'Triple S Mold Sneaker',
            price: '975$',
            description: '',
            gender: 'M',
            type: 'Other',
            img: ''
        },
        {
            name: 'Balenciaga / Adidas Track Forum Low Top Sneaker',
            price: '1,250$',
            description: '',
            gender: 'M',
            type: 'Other',
            img: ''
        },
        {
            name: 'Triple S Sneaker Allover Logo',
            price: '1,150$',
            description: '',
            gender: 'M',
            type: 'Other',
            img: ''
        },
        {
            name: 'Speed 2.0 Recycled Knit Slide Sandal',
            price: '750$',
            description: '',
            gender: 'M',
            type: 'Other',
            img: ''
        },


    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
    return knex('product').truncate();
};