import { useTranslation } from 'react-i18next';
export const Products = () => {
  const { t } = useTranslation();

  return (
    <div>{t('products')}</div>
  );
}
