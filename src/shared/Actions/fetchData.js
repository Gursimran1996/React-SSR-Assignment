import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => dispatch => {
    // const res = await axios.get('');
    const data = [
        {
            categoryId: 'categoryId-1',
            categoryName: 'Category 1',
            products: [
                {
                    productName: 'Product 1',
                    thumbnail: '',
                    productDesc: 'Description for product 1',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 10
                },
                {
                    productName: 'Product 2',
                    thumbnail: '',
                    productDesc: 'Description for product 2',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 20
                },
                {
                    productName: 'Product 3',
                    thumbnail: '',
                    productDesc: 'Description for product 3',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 5
                },
                {
                    productName: 'Product 4',
                    thumbnail: '',
                    productDesc: 'Description for product 4',
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
                    thumbnail: '',
                    productDesc: 'Description for product 1',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 100
                },
                {
                    productName: 'Product 2',
                    thumbnail: '',
                    productDesc: 'Description for product 2',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 87
                },
                {
                    productName: 'Product 3',
                    thumbnail: '',
                    productDesc: 'Description for product 3',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 75
                },
                {
                    productName: 'Product 4',
                    thumbnail: '',
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
                    thumbnail: '',
                    productDesc: 'Description for product 1',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 43
                },
                {
                    productName: 'Product 2',
                    thumbnail: '',
                    productDesc: 'Description for product 2',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 21
                },
                {
                    productName: 'Product 3',
                    thumbnail: '',
                    productDesc: 'Description for product 3',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 56
                },
                {
                    productName: 'Product 4',
                    thumbnail: '',
                    productDesc: 'Description for product 4',
                    productPrice: 2000,
                    productRating: 3,
                    productQuantity: 5,
                    noOfRatings: 5
                }
            ]
        }
    ];
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(data);
        }, 300);
    });

    let result;
    promise1.then(data => {
        result = data;
        console.log(result);
        dispatch({
            type: FETCH_DATA,
            payload: result
        });
    });
}