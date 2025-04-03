import {redirect} from "next/navigation";
export default function reviewDetails({
    params,
  }:{
    params:{productId:string,reviewId:string};
  }) {
    const {productId,reviewId}=params;
    if(parseInt(reviewId)>1000){
        redirect("/products")
    }
    return <h1>Review {reviewId} for Product {productId}</h1>;
  }
  