const ExponentTwo = ({ count }) => {
	const exponent = 2;
	const base = count;
	const operation = `${Array(exponent).fill(base).join(' * ')}`;
	const result = count ** exponent;

	return (
		<div className='exponent-counter-container'>
			<p className='exponent-label'>n²</p>
			<p className='exponent-result'>
				{operation} = <span className='total'>{result}</span>
			</p>
		</div>
	);
};

export default ExponentTwo;
