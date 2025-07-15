import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Filter, Search, FileText, Video, Image, BookOpen } from 'lucide-react';

const Resources = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'TM HealthX Constitution',
      type: 'Constitution',
      theme: 'Governance',
      format: 'PDF',
      description: 'Complete constitutional framework and governance structure',
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Mental Health Awareness Toolkit',
      type: 'Toolkit',
      theme: 'Mental Health',
      format: 'PDF',
      description: 'Comprehensive guide for mental health advocacy and support',
      icon: <BookOpen className="w-6 h-6" />,
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'SRHR Education Materials',
      type: 'Toolkit',
      theme: 'SRHR',
      format: 'PDF',
      description: 'Sexual and reproductive health rights educational resources',
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Climate Health Policy Brief',
      type: 'Policy',
      theme: 'Climate',
      format: 'PDF',
      description: 'Policy recommendations for climate-health intersections',
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Youth Leadership Research',
      type: 'Research',
      theme: 'Youth Leadership',
      format: 'PDF',
      description: 'Research findings on youth engagement in health advocacy',
      icon: <BookOpen className="w-6 h-6" />,
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Community Outreach Guide',
      type: 'Toolkit',
      theme: 'Community',
      format: 'PDF',
      description: 'Step-by-step guide for effective community health outreach',
      icon: <FileText className="w-6 h-6" />,
      downloadUrl: '#'
    }
  ];

  const filterOptions = ['All', 'Toolkit', 'Research', 'Policy', 'Constitution'];
  const themeOptions = ['All Themes', 'Mental Health', 'SRHR', 'Climate', 'Youth Leadership', 'Community', 'Governance'];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = selectedFilter === 'All' || resource.type === selectedFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDownload = (resource) => {
    // For demonstration - replace with actual download logic
    alert(`Downloading: ${resource.title}\nFormat: ${resource.format}\nType: ${resource.type}`);
    console.log('Download initiated for:', resource);
    
    // Example for real file downloads:
    // const fileUrl = `/downloads/${resource.id}-${resource.title}.pdf`;
    // const link = document.createElement('a');
    // link.href = fileUrl;
    // link.download = `${resource.title}.${resource.format}`;
    // link.click();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Resource Center
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Access our comprehensive collection of toolkits, research papers, policy briefs, and educational materials to support your health advocacy journey.
          </motion.p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {resource.format}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {resource.theme}
                  </span>
                  
                  <button
                    onClick={() => handleDownload(resource)}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FileText className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Additional Resources?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Contact our team for specialized materials or custom toolkits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Request Custom Resource
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resources;