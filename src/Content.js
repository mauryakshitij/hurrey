import React from "react";
import styled from "styled-components";
function Content() {
	return (
		<div>
			<Text_cont>
				<Text>
					<h2>Hello div</h2>
					<p>
						Doloribus temporibus voluptate natus itaque quos natus
						facilis. Vel velit itaque itaque non. Tempore reiciendis
						sit qui mollitia perferendis dolores qui. Est sed omnis
						omnis recusandae inventore rerum. Enim aut perspiciatis
						quia excepturi. Vel omnis possimus nam provident illum
						delectus aut. Eum minima est dolorem assumenda ut. Hic
						omnis ut corporis soluta. Laborum et iste quia non
						debitis quia unde. Nemo libero labore sint facere.
						Consequatur quia et voluptatem est. Magni explicabo
						porro soluta sunt officiis qui. Vero harum non
						consequuntur blanditiis blanditiis nesciunt voluptatem
						fugiat. Sit amet illo ut ut consequatur. Dolor tempora
						quidem vel dolores dicta quia aliquam accusamus. Numquam
						veritatis quia alias architecto. Hic vel in eveniet
						nihil. Quod in perferendis natus omnis aspernatur quos
						velit. Officiis corporis ut nisi suscipit sunt aut
						perferendis. Sit impedit distinctio vitae qui eum
						voluptatem quam non. Et at aut amet doloremque
						recusandae asperiores blanditiis. Dignissimos sit
						impedit dolores. Voluptatem aut est ad sit ex. Qui
						incidunt culpa nesciunt aliquid. Accusantium sunt sit
						corporis qui id magnam. Eaque cum nemo quaerat voluptas.
						Repudiandae dolor qui dolorem maxime explicabo. Corrupti
						sint rerum error eligendi asperiores iste. Eum veniam
						voluptatem amet ducimus praesentium. Nam inventore minus
						a enim et saepe porro. Sequi nisi voluptatem rerum ut
						aut nobis. Dolor repudiandae officiis atque consequatur
						iusto. Eius qui aliquid repellat ducimus sed excepturi
						unde veritatis. Non id delectus voluptatem molestias.
						Aperiam autem omnis blanditiis ratione optio dolores
						earum vero. Esse explicabo doloremque minus quisquam ut.
					</p>
				</Text>
			</Text_cont>
			<Image>
				<img
					src="https://via.placeholder.com/500x480.png/f7eded/000000?Text=500x480"
					alt="Image"
				/>
			</Image>
		</div>
	);
}

export default Content;
const Text_cont = styled.div`
	${"" /* background-color: yellow; */}
	position: absolute;
	margin-left: 0;
	display: flex;
	height: 100%;
	width: 50%;
	justify-content: center;
	align-items: center;
`;
const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 80%;
	width: 80%;
`;
const Image = styled.div`
	${"" /* background-color: aquamarine; */}
	position: absolute;
	display: flex;
	height: 100%;
	margin-left: 50%;
	margin-right: 0;
	width: 50%;
	justify-content: center;
	align-items: center;
`;
