const ExponentFour = ({ count }) => {
	const exponent = 4;
	const base = count;
	const operation = `${Array(exponent).fill(base).join(' * ')}`;
	const result = count ** exponent;

	return (
		<div className='exponent-counter-container'>
			<p className='exponent-label'>n⁴</p>
			<p className='exponent-result'>
				{operation} = <span className='total'>{result}</span>
			</p>
		</div>
	);
};

export default ExponentFour;
