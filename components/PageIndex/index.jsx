import { useRouter } from 'next/router';
import Styles from './pageIndex.module.scss';
import AddSection from '../AddSection';

const PageIndex = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <main className={Styles.page__container}>
            <div className={Styles.page__name}>
                <h1>{name}</h1>
            </div>
            <AddSection/>
        </main>
    );
};

export default PageIndex;