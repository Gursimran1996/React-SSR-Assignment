export const FETCH__FILTERS_DATA = 'FETCH__FILTERS_DATA';

export const fetchFiltersData = () => dispatch => {
    const filtersData = [
        {
            label: 'Category',
            content: [
                "Category-1",
                "Category-2",
                "Category-3",
                "Category-4",
                "Category-5",
            ]
        },
        {
            label: 'Price',
            content: [
                "0 - 100",
                "100 - 200",
                "200- 300",
                "300 - 400",
                "400 - 500"
            ]
        },
        {
            label: 'Rating',
            content: [
                "5 star",
                "4 star",
                "3 star",
                "2 star",
                "1 star"
            ]
        },
        {
            label: 'Discount',
            content: [
                "Upto 10%",
                "Upto 30%",
                "Upto 50%",
                "Upto 70%",
                "Upto 90%"
            ]
        },
        {
            label: 'Stock',
            content: [
                "Exclude out of stock"
            ]
        }
    ]
    dispatch({
        type: FETCH__FILTERS_DATA,
        payload: filtersData
    });
}