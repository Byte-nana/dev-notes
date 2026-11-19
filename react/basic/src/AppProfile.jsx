import Profile from './components/Profile';
import './App.css';

export default function AppProfile() {
  return (
    <>
      <Profile
        image='https://plus.unsplash.com/premium_photo-1732757787045-d903f2e88b08?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        name='Bread Toast'
        title='Front-end Developer'
        isNew={true}
      />
      <Profile
        image='https://plus.unsplash.com/premium_photo-1732757787056-bb8a19f1c855?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        name='Coffee Coop'
        title='Back-end Developer'
        isNew={false}
      />
      <Profile
        image='https://plus.unsplash.com/premium_photo-1732757787491-fb703171ba09?q=80&w=1347&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
        name='Biscuit Crisp'
        title='Full-stack Developer'
        isNew={true}
      />
    </>
  );
}
