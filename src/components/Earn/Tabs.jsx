import React, { useState } from 'react';

const Tab = ({ tabs }) => {
	const [ activeTab, setActiveTab ] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div>
			<div className="flex space-x-4 justify-center ">
				{tabs.map((tab, index) => (
					<button
						key={index}
						onClick={() => handleTabClick(index)}
						className={`__tab-btn py-2 px-4  ${activeTab === index
							? 'bg-white text-black  border-[#00674B] border-2'
							: 'bg-[#AEB1B080] text-gray-700'} rounded-lg`}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div>{tabs[activeTab].content}</div>
		</div>
	);
};

export default Tab;
