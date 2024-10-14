import Property from './PropertyListing/page';
import FilterSelect from './PropertyListing/components/FilterSelect';
import Filter from './PropertyListing/components/FilterMenu';
import AuthPage from './components/AuthPage';
import PropertyList from './PropertyListing/page';
import Hero from './components/Hero';
import Featured from './components/Featured';

function Page() {
	return (
		<div>
			<Hero />
			<Featured />
		</div>
	);
}

export default Page;
