import React from 'react';
import Squares from './Components/Squares';
const Board = ({ squares, onClick }) => (
	<div style={style}>
		{squares.map((square, i) => (
			<Squares key={i} value={square} onClick={() => onClick(i)} />
		))}
	</div>
);
const style={
    border: '4px solid darkblue',
    borderRadius: '10px',
    width:'250px',
    height:'250px',
    margin:'0 auto',
    display: 'grid',
    gridTempelate:'repeat(3,1fr)/repeat(3,1fr)'

}
export default Board;