import axios from "./axios";

const baseUrl = process.env.REACT_APP_API;

class Flags {
	_allFlags = [];
	_randomFlags = [];

	getFlags = async () => {
		try {
			const allFlags = await axios.get(baseUrl);
			this._allFlags = allFlags.data;
		} catch (err) {
			console.error(err);
		}
	};

	getRandomFlags = () => {
		this._randomFlags = [];
		for (let i = 0; i < 10; i++) {
			this._randomFlags.push(
				this._allFlags[Math.floor(Math.random() * this._allFlags.length)]
			);
		}
		return this._randomFlags;
	};
}

export default Flags;
