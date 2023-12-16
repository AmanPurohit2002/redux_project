// import store from "../store/store";

//actionCreater
const loadingStatus = () => {
  const productList = [
    { id: 1, name: "Iphone", price: 1000, quantity: 1 },
    { id: 2, name: "Samsung", price: 2000, quantity: 1 },
    { id: 3, name: "Sony", price: 1500, quantity: 1 },
    { id: 4, name: "LG", price: 1800, quantity: 1 },
    { id: 5, name: "Google", price: 1300, quantity: 1 },
    { id: 6, name: "Xiaomi", price: 1200, quantity: 1 },
    { id: 7, name: "Huawei", price: 1700, quantity: 1 },
    { id: 8, name: "OnePlus", price: 1900, quantity: 1 },
    { id: 9, name: "Motorola", price: 1100, quantity: 1 },
    { id: 10, name: "Nokia", price: 1400, quantity: 1 },
  ];
  return {
    type: "LOADING_STATUS",
    payload: productList,
  };
};

// const setLoadingStatus = () => store.dispatch(loadingStatus());

export default loadingStatus;
