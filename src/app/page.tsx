import Property from './PropertyListing/page';
import FilterSelect from './PropertyListing/components/FilterSelect';
import Filter from './PropertyListing/components/FilterMenu';
import AuthPage from './components/AuthPage';

function Page() {
	return (
		<div>
			<div className='flex items-center justify-between px-4 py-2'></div>

			<AuthPage />
		</div>
	);
}

export default Page;
