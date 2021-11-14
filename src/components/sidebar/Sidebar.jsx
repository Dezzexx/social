import cls from './Sidebar.module.css';
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    let friends = props.state.Friends.map(f => <Friends name={f.name} id={f.id} />)
    return (
        <div className={cls.sidebar}>
            <div className={cls.item}>
                {friends}
            </div>
        </div>
    )
}
export default Sidebar;