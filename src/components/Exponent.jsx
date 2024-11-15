const Exponent = ({ base, exponent }) => {
	const operation = `${Array(exponent).fill(base).join(' * ')}`;
	const result = base ** exponent;

	return (
		<div className='exponent-counter-container'>
			<p className='exponent-label'>
				n<sup>{exponent}</sup>
			</p>
			<p className='exponent-result'>
				{operation} = <span className='total'>{result}</span>
			</p>
		</div>
	);
};

export default Exponent;
