// import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => dispatch => {
    const data = [
        {
            categoryId: 'categoryId-1',
            categoryName: 'Category 1',
            products: [
                {
                    productName: 'Product 1',
                    thumbnail: 'https://picsum.photos/325/195',
                    productDesc: 'A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 10
                },
                {
                    productName: 'Product 2',
                    thumbnail: 'https://picsum.photos/268/195',
                    productDesc: 'A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 20
                },
                {
                    productName: 'Product 3',
                    thumbnail: 'https://picsum.photos/297/195',
                    productDesc: 'A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 5
                },
                {
                    productName: 'Product 4',
                    thumbnail: 'https://picsum.photos/285/195',
                    productDesc: 'A product description is the marketing copy used to describe a product’s value proposition to potential customers. A compelling product description provides customers with details around features, problems it solves and other benefits to help generate a sale.',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 5
                }
            ]
        },
        {
            categoryId: 'categoryId-2',
            categoryName: 'Category 2',
            products: [
                {
                    productName: 'Product 1',
                    thumbnail: 'https://picsum.photos/220/195',
                    productDesc: 'Description for product 1',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 100
                },
                {
                    productName: 'Product 2',
                    thumbnail: 'https://picsum.photos/320/195',
                    productDesc: 'Description for product 2',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 87
                },
                {
                    productName: 'Product 3',
                    thumbnail: 'https://picsum.photos/300/195',
                    productDesc: 'Description for product 3',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 75
                },
                {
                    productName: 'Product 4',
                    thumbnail: 'https://picsum.photos/290/195',
                    productDesc: 'Description for product 4',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 5
                }
            ]
        },
        {
            categoryId: 'categoryId-3',
            categoryName: 'Category 3',
            products: [
                {
                    productName: 'Product 1',
                    thumbnail: 'https://picsum.photos/270/195',
                    productDesc: 'Description for product 1',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 43
                },
                {
                    productName: 'Product 2',
                    thumbnail: 'https://picsum.photos/260/195',
                    productDesc: 'Description for product 2',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 21
                },
                {
                    productName: 'Product 3',
                    thumbnail: 'https://picsum.photos/300/195',
                    productDesc: 'Description for product 3',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 56
                },
                {
                    productName: 'Product 4',
                    thumbnail: 'https://picsum.photos/250/195',
                    productDesc: 'Description for product 4',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 5
                }
            ]
        }
    ];
    // let promise1 = new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         resolve(data);
    //     }, 300);
    // });

    // let result;
    dispatch({
        type: FETCH_DATA,
        payload: data
    });
    // promise1.then(data => {
    //     result = data;
    //     console.log('Promise is dispatched', result);
    //     dispatch({
    //         type: FETCH_DATA,
    //         payload: result
    //     });
    // });
}