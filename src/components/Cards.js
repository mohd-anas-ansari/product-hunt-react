import React from "react";
import Card from './Card';



//Data
let data = [
	{
		name: "UX Office Hours",
		img:
			"https://ph-files.imgix.net/1dfe63ee-cfa1-4c91-b614-66b5777f0570?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
		description: "This   background-color: red;is the small cute description about UX",
    tags: ["tag1", "tag2"],
    upvote: 56,
	},

	{
		name: "Trrove",
		img:
			"https://ph-files.imgix.net/ea221e1a-93e8-415e-984c-93fa5885221b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&blend=95fd78c0-2db3-4984-b4c9-84718bdbc79f&bm=normal&bf=max&bh=40&bw=40&bg=000000&bri=-40",
		description: "This is the small cute description about Trrove",
    tags: ["tag1", "tag2"],
    upvote: 125,
	},

	{
		name: "Film Stack",
		img:
			"https://ph-files.imgix.net/eb277432-098f-40d8-9a52-05b9d39b0118?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&blend=fc1ab6d4-33b8-4a2e-8591-9e61fa69af51&bm=normal&bf=max&bh=40&bw=40&bg=000000&bri=-40",
		description: "This is the small cute description about Film",
    tags: ["tag1", "tag2"],
    upvote: 300,
	},

	{
		name: "Datawaves",
		img:
			"https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
		description: "This is the small cute description about Data Waves",
    tags: ["tag1", "tag2"],
    upvote: 600,
	}
];




function Cards() {
	return (
		<div className='card-alignment-container'>
      <div className='heading-above-cards'>
        <p>Today</p>
        <div className='sorts'>
          <span>Newest</span>
          <span>Popular</span>
        </div>
      </div>
			{data.map((product) => <Card {...product} />)}
    </div>
		);
}



// class Cards extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			data: products
// 		};
// 	}
// 	updateCount = upvote => {
// 		let updatedData = this.state.data.map(product => {
// 			if (product.upvote === upvote) {
// 				product.upvote = product.upvote + 1;
// 			}
// 			return product;
// 		});vote
// 		this.setState({ data: updatedData });
// 	};
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="product_list">
//             {this.state.data.map(product => (
//               <Card {...product} updateCount={this.updateCount} />
//             ))}
//           </div>
//           <div className="side_container">
//             <Workers data={images} />
//             <Sponser />
//             <Newsletter />
//           </div>
//         </div>
//       </div>
//     );
//   }
  

export default Cards