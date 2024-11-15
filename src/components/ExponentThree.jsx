const ExponentThree = ({ count }) => {
	const exponent = 3;
	const base = count;
	const operation = `${Array(exponent).fill(base).join(' * ')}`;
	const result = count ** exponent;

	return (
		<div className='exponent-counter-container'>
			<p className='exponent-label'>n³</p>
			<p className='exponent-result'>
				{operation} = <span className='total'>{result}</span>
			</p>
		</div>
	);
};

export default ExponentThree;
