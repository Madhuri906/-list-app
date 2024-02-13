import Styles from './main.module.css';
import { useGetListsQuery } from '../../api/listApi';
import { List } from '../list/list';

export const Main = () => {
    const {data, isLoading, isError} = useGetListsQuery();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <>
            <div className={Styles['header']}>
                <h1>List Creation</h1><button>Create a new list</button>
            </div>
            <div className={Styles['flex-container']}>
                    <div className={Styles["flex-item"]}>
                    <List listItems={data.listOne} left={true} />
                    </div>
                    <div className={Styles["flex-item"]}>
                    <List listItems={data.listTwo} left={false} />
                    </div>
            </div>
           
           
        </>

    )
}