import Styles from './list.module.css';

export const List = ({listItems, left}) => {
    return (<div className={Styles['container']}>
           {left ? <h4>List1</h4> : <h4>List2</h4>}
           {listItems.map((item) => {
            return (
                <div className={Styles['list-item']}><h3>{item.name}</h3><p>{item.description}</p></div>
            )
           })}
          </div>
    );
}