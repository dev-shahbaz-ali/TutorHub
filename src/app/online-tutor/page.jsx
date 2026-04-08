"use client";
import React, { useState, useMemo } from "react";
import {
  Star,
  MapPin,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Phone,
  Filter,
  Search,
  User,
  Home,
  Globe,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { TutorCustomer } from "../../../dummyData";

const OnlineTutorPage = () => {
  // Filter states
  const [filters, setFilters] = useState({
    search: "",
    subjects: ["All Subjects"],
    gender: "Both",
    tutorType: "Both",
    city: "All",
    area: "All",
  });

  // Available subjects from tutor data
  const subjects = useMemo(() => {
    const allSubjects = ["All Subjects", "Quran"];
    const degreeSubjects = TutorCustomer.map((t) => {
      if (t.degree.includes("Physics")) return "Physics";
      if (t.degree.includes("Mathematics")) return "Mathematics";
      if (t.degree.includes("Chemistry")) return "Chemistry";
      if (t.degree.includes("Computer") || t.degree.includes("Software"))
        return "Computer Science";
      if (t.degree.includes("English")) return "English";
      if (t.degree.includes("Biology")) return "Biology";
      if (t.degree.includes("Statistics")) return "Statistics";
      if (t.degree.includes("Engineering")) return "Engineering";
      if (t.degree.includes("Economics")) return "Economics";
      if (t.degree.includes("Psychology")) return "Psychology";
      if (t.degree.includes("Islamic")) return "Islamic Studies";
      if (t.degree.includes("Business") || t.degree.includes("BBA"))
        return "Business Studies";
      if (t.degree.includes("IT")) return "IT";
      if (t.degree.includes("Zoology")) return "Zoology";
      if (
        t.degree.includes("AI") ||
        t.degree.includes("Artificial Intelligence")
      )
        return "Artificial Intelligence";
      if (t.degree.includes("Education")) return "Education";
      return null;
    }).filter(Boolean);

    return [...new Set([...allSubjects, ...degreeSubjects])];
  }, []);

  // Available cities from tutor data
  const cities = useMemo(() => {
    return ["All", ...new Set(TutorCustomer.map((tutor) => tutor.location))];
  }, []);

  // Mock areas for demonstration
  const areas = {
    All: ["All"],
    Islamabad: ["All", "F-7", "F-8", "G-9", "I-8", "I-10"],
    Lahore: ["All", "Gulberg", "Defence", "Model Town", "Johar Town"],
    Karachi: ["All", "Clifton", "Defence", "Gulshan", "North Nazimabad"],
    Rawalpindi: ["All", "Satellite Town", "Bahria Town", "Chaklala"],
    Faisalabad: ["All", "Canal Road", "Jinnah Colony", "Madina Town"],
    Multan: ["All", "Cantt", "Gulgasht", "Shah Rukn-e-Alam"],
    Peshawar: ["All", "University Town", "Hayatabad", "Cantt"],
    Sialkot: ["All", "Cantt", "Civil Lines", "Defence Road"],
    Gujranwala: ["All", "G.T. Road", "Cantt", "Model Town"],
    Hyderabad: ["All", "Qasimabad", "Latifabad", "City"],
    Quetta: ["All", "Cantt", "Jinnah Town", "Samungli"],
    Abbottabad: ["All", "Cantt", "Jinnahabad", "Mandian"],
    Bahawalpur: ["All", "Model Town", "Cantt", "Satellite Town"],
  };

  // Mock tutor types and genders
  const tutorsWithMockData = useMemo(() => {
    return TutorCustomer.map((tutor) => ({
      ...tutor,
      gender: Math.random() > 0.5 ? "Male" : "Female",
      tutorType: ["Online", "Home", "Both"][Math.floor(Math.random() * 3)],
      area:
        areas[tutor.location]?.[
          Math.floor(Math.random() * (areas[tutor.location]?.length - 1)) + 1
        ] || "All",
    }));
  }, []);

  // Filter tutors based on all criteria
  const filteredTutors = useMemo(() => {
    return tutorsWithMockData.filter((tutor) => {
      const matchesSearch =
        filters.search === "" ||
        tutor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        tutor.degree.toLowerCase().includes(filters.search.toLowerCase()) ||
        tutor.university.toLowerCase().includes(filters.search.toLowerCase()) ||
        tutor.bio.toLowerCase().includes(filters.search.toLowerCase());

      const subjectInDegree = tutor.degree.toLowerCase();
      const matchesSubject =
        filters.subjects.includes("All Subjects") ||
        filters.subjects.some(
          (subject) =>
            subjectInDegree.includes(subject.toLowerCase()) ||
            (subject === "Quran" && tutor.degree.includes("Islamic"))
        );

      const matchesGender =
        filters.gender === "Both" || tutor.gender === filters.gender;

      const matchesTutorType =
        filters.tutorType === "Both" || tutor.tutorType === filters.tutorType;

      const matchesCity =
        filters.city === "All" || tutor.location === filters.city;

      const matchesArea =
        filters.area === "All" ||
        filters.area === "All" ||
        tutor.area === filters.area;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesGender &&
        matchesTutorType &&
        matchesCity &&
        matchesArea
      );
    });
  }, [filters, tutorsWithMockData]);

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
      ...(filterName === "city" && { area: "All" }),
    }));
  };

  // Handle subject selection
  const handleSubjectToggle = (subject) => {
    setFilters((prev) => {
      if (subject === "All Subjects") {
        return { ...prev, subjects: ["All Subjects"] };
      }

      const newSubjects = prev.subjects.includes("All Subjects")
        ? [subject]
        : prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject];

      return {
        ...prev,
        subjects: newSubjects.length === 0 ? ["All Subjects"] : newSubjects,
      };
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      search: "",
      subjects: ["All Subjects"],
      gender: "Both",
      tutorType: "Both",
      city: "All",
      area: "All",
    });
  };

  // Render star rating component
  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-gray-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );

  // Tutor card component in list style
  const TutorCard = ({ tutor }) => (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-200 mb-4 last:mb-0">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Tutor info */}
        <div className="flex-1 p-5 border-r border-gray-100">
          <div className="flex items-start gap-4">
            {/* Tutor Image */}
            <div className="flex-shrink-0">
              <img
                src={tutor.image}
                alt={`${tutor.name} - ${tutor.degree}`}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                loading="lazy"
              />
            </div>

            {/* Tutor Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-900 mb-1 sm:mb-0">
                  {tutor.name}
                </h2>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tutor.tutorType === "Online" ? "Online" : "In-Person"}
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">
                    {tutor.location}, {tutor.area}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{tutor.gender}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{tutor.experience}</span>
                </div>
              </div>

              <div className="mb-4">{renderStars(tutor.rating)}</div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {tutor.bio}
              </p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    {tutor.degree}
                  </span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="text-gray-500">{tutor.university}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact buttons */}
        <div className="md:w-64 p-5 bg-gray-50">
          <div className="h-full flex flex-col">
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                Teaching Mode
              </h3>
              <div className="flex items-center gap-2">
                {tutor.tutorType === "Online" ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <Globe className="w-5 h-5" />
                    <span className="font-medium">Online Classes</span>
                  </div>
                ) : tutor.tutorType === "Home" ? (
                  <div className="flex items-center gap-2 text-purple-600">
                    <Home className="w-5 h-5" />
                    <span className="font-medium">Home Tuition</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-green-600">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Online</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600">
                      <Home className="w-4 h-4" />
                      <span className="text-sm">Home</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex gap-3">
                {tutor.contact.whatsapp && (
                  <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg transition-colors text-sm font-medium">
                    <Phone className="w-4 h-4" />
                    WhatsApp
                  </button>
                )}
                {tutor.contact.message && (
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition-colors text-sm font-medium">
                    <MessageCircle className="w-4 h-4" />
                    Message
                  </button>
                )}
              </div>

              <button className="w-full py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium">
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Find Your Perfect Tutor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our verified tutors and find the right match for your
            learning needs
          </p>
        </header>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <Filter className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">Filter by:</h2>
              </div>

              {/* Search Input */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search tutors..."
                    value={filters.search}
                    onChange={(e) =>
                      handleFilterChange("search", e.target.value)
                    }
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
                  />
                </div>
              </div>

              {/* Subjects Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">
                  Subjects
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {subjects.slice(0, 6).map((subject) => (
                    <button
                      key={subject}
                      onClick={() => handleSubjectToggle(subject)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        filters.subjects.includes(subject)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
                <select
                  value={filters.subjects[filters.subjects.length - 1]}
                  onChange={(e) => handleSubjectToggle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gender Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">
                  CHOOSE GENDER
                </h3>
                <div className="flex gap-2">
                  {["Male", "Female", "Both"].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => handleFilterChange("gender", gender)}
                      className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg border transition-all ${
                        filters.gender === gender
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-blue-300"
                      }`}
                    >
                      <User className="w-4 h-4 mb-1" />
                      <span className="text-xs">{gender}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tutor Type Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3 text-sm">
                  CHOOSE TUTOR
                </h3>
                <div className="flex gap-2">
                  {["Online", "Home", "Both"].map((type) => (
                    <button
                      key={type}
                      onClick={() => handleFilterChange("tutorType", type)}
                      className={`flex-1 flex flex-col items-center justify-center py-3 rounded-lg border transition-all ${
                        filters.tutorType === type
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-blue-300"
                      }`}
                    >
                      {type === "Online" ? (
                        <Globe className="w-4 h-4 mb-1" />
                      ) : type === "Home" ? (
                        <Home className="w-4 h-4 mb-1" />
                      ) : (
                        <div className="flex gap-1 mb-1">
                          <Globe className="w-3 h-3" />
                          <Home className="w-3 h-3" />
                        </div>
                      )}
                      <span className="text-xs">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filters */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 text-sm">
                    Choose City
                  </h3>
                  <select
                    value={filters.city}
                    onChange={(e) => handleFilterChange("city", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-700 mb-2 text-sm">
                    Choose Area
                  </h3>
                  <select
                    value={filters.area}
                    onChange={(e) => handleFilterChange("area", e.target.value)}
                    disabled={filters.city === "All"}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    {(areas[filters.city] || ["All"]).map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={clearAllFilters}
                className="w-full mt-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div className="text-gray-700 mb-3 sm:mb-0">
                  <span className="font-bold text-lg text-blue-600">
                    {filteredTutors.length}
                  </span>{" "}
                  <span className="text-gray-600">tutors found</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filters.subjects[0] !== "All Subjects" &&
                    filters.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                      >
                        {subject}
                        <button
                          onClick={() => handleSubjectToggle(subject)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  {filters.gender !== "Both" && (
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {filters.gender}
                      <button
                        onClick={() => handleFilterChange("gender", "Both")}
                        className="text-green-500 hover:text-green-700"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {filters.tutorType !== "Both" && (
                    <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {filters.tutorType}
                      <button
                        onClick={() => handleFilterChange("tutorType", "Both")}
                        className="text-purple-500 hover:text-purple-700"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Tutors List */}
            <div className="flex flex-col">
              {filteredTutors.length > 0 ? (
                filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No tutors found
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OnlineTutorPage;
