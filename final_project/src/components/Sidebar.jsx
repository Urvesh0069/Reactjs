import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Shirt, Laptop, Home, Pill, Sofa, Scissors, Watch, Camera } from 'lucide-react';

const Sidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const categories = [
    { 
      name: 'Fashion', 
      icon: Shirt, 
      hasDropdown: true, 
      color: 'text-blue-400',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories']
    },
    { 
      name: 'Electronics', 
      icon: Laptop, 
      hasDropdown: true, 
      color: 'text-blue-400',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Audio']
    },
    { 
      name: 'Home Decor', 
      icon: Home, 
      hasDropdown: true, 
      color: 'text-blue-400',
      subcategories: ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom']
    },
    { 
      name: 'Medicine', 
      icon: Pill, 
      hasDropdown: false, 
      color: 'text-blue-400'
    },
    { 
      name: 'Furniture', 
      icon: Sofa, 
      hasDropdown: false, 
      color: 'text-blue-400'
    },
    { 
      name: 'Crafts', 
      icon: Scissors, 
      hasDropdown: false, 
      color: 'text-blue-400'
    },
    { 
      name: 'Accessories', 
      icon: Watch, 
      hasDropdown: false, 
      color: 'text-blue-400'
    },
    { 
      name: 'Camera', 
      icon: Camera, 
      hasDropdown: false, 
      color: 'text-blue-400'
    },
  ];

  const toggleCategory = (index) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <aside className="w-80 bg-white shadow-lg border-r border-gray-100 h-screen sticky top-16 overflow-y-auto">
      {/* Categories List */}
      <div className="py-2">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          const isExpanded = expandedCategories.includes(index);
          
          return (
            <div key={index} className="border-b border-gray-50 last:border-b-0">
              <div
                className="flex items-center justify-between px-6 py-4 hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
                onClick={() => category.hasDropdown && toggleCategory(index)}
              >
                <div className="flex items-center">
                  <IconComponent className={`h-5 w-5 ${category.color} mr-4 group-hover:text-blue-600 transition-colors duration-200 group-hover:scale-110`} />
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200 font-medium">
                    {category.name}
                  </span>
                </div>
                {category.hasDropdown && (
                  <div className="transition-transform duration-200">
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                    )}
                  </div>
                )}
              </div>
              
              {/* Subcategories */}
              {category.hasDropdown && isExpanded && (
                <div className="bg-gray-50 border-t border-gray-100">
                  {category.subcategories?.map((subcategory, subIndex) => (
                    <div
                      key={subIndex}
                      className="px-12 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0"
                    >
                      {subcategory}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;