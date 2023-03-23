import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/micadam/bg3countdown.git', // Update to point to your repository
		user: {
			name: 'Adam Michalski', // update to use your name
			email: 'contact@adammi.ch' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
