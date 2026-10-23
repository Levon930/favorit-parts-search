import { useDispatch, useSelector } from 'react-redux';
import { BrandCard } from '@/entities/brand';
import { fetchOffers, selectSelectedGoodsId } from '@/entities/offer';

export function SelectBrandCard({ part }) {
  const dispatch = useDispatch();
  const { goodsID, brand, number } = part;
  const selected = useSelector(selectSelectedGoodsId) === goodsID;

  return (
    <BrandCard part={part} selected={selected} onSelect={() => dispatch(fetchOffers({ goodsID, brand, number }))} />
  );
}
