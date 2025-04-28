import Stripe from "stripe";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  return <div>Carousel</div>;
};
