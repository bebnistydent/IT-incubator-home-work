import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';



type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: ()=> void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			    {/*ВЫЗЫВАЕМ КОМПОНЕНТУ CurrentUser*/}  
			<ul>
			  {props.users.myFriends.map((user) => (
			<li 
			     key={user.id}>
			     <CurrentUser user={user} />
			</li>
			  ))}
			</ul>
		</div>
	);
};
