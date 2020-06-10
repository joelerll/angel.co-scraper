module.exports = {
    URL: "graphql?fallbackAOR=talent",
    BASE_URL: "https://angel.co/",
    DEFAULT_QUERY: "query JobSearchResultsX($filterConfigurationInput: FilterConfigurationInput!) {\n  talent {\n    jobSearchResults(filterConfigurationInput: $filterConfigurationInput) {\n      rawQuery\n      totalStartupCount\n      experimentCohort\n      startups {\n        edges {\n          node {\n            ... on StartupSearchResult {\n              ...StartupResultSearchResultFragment\n              __typename\n            }\n            ... on PromotedResult {\n              promotionId\n              promotedStartup {\n                ...StartupResultFragment\n                __typename\n              }\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      featuredContent {\n        ...FeaturedContentFragment\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  abTestGroups(names: [\"search_sort_ab_test_group\"]) {\n    group\n    name\n    __typename\n  }\n}\n\nfragment StartupResultSearchResultFragment on StartupSearchResult {\n  id\n  ...BadgeBarSearchResultFragment\n  ...StartupHeaderSearchResultFragment\n  ...StarStartupSearchResultButtonFragment\n  highlightedJobListings {\n    ...JobListingListSearchResultFragment\n    __typename\n  }\n  signals {\n    ...SignalSearchResultFragment\n    __typename\n  }\n  __typename\n}\n\nfragment BadgeBarSearchResultFragment on StartupSearchResult {\n  id\n  badges {\n    ...BadgeFragment\n    __typename\n  }\n  __typename\n}\n\nfragment BadgeFragment on Badge {\n  id\n  name\n  label\n  tooltip\n  avatarUrl\n  rating\n  __typename\n}\n\nfragment StartupHeaderSearchResultFragment on StartupSearchResult {\n  id\n  name\n  slug\n  logoUrl\n  highConcept\n  companySize\n  locationTaggings {\n    id\n    displayName\n    __typename\n  }\n  __typename\n}\n\nfragment StarStartupSearchResultButtonFragment on StartupSearchResult {\n  id\n  currentUserHasStarred\n  __typename\n}\n\nfragment JobListingListSearchResultFragment on JobListingSearchResult {\n  id\n  createdAt\n  autoPosted\n  atsSource\n  description\n  jobType\n  liveStartAt\n  locationNames\n  primaryRoleTitle\n  remote\n  slug\n  title\n  ...JobListingCompensationSearchResultFragment\n  __typename\n}\n\nfragment JobListingCompensationSearchResultFragment on JobListingSearchResult {\n  id\n  compensation\n  estimatedSalary\n  equity\n  usesEstimatedSalary\n  __typename\n}\n\nfragment SignalSearchResultFragment on Signal {\n  id\n  label\n  text\n  careerPreferenceOptionId\n  __typename\n}\n\nfragment StartupResultFragment on Startup {\n  id\n  ...BadgeBarFragment\n  ...StartupHeaderFragment\n  ...StarStartupButtonFragment\n  highlightedJobListings {\n    ...JobListingListFragment\n    __typename\n  }\n  __typename\n}\n\nfragment BadgeBarFragment on Startup {\n  id\n  badges {\n    ...BadgeFragment\n    __typename\n  }\n  __typename\n}\n\nfragment StartupHeaderFragment on Startup {\n  id\n  name\n  slug\n  logoUrl\n  highConcept\n  companySize\n  __typename\n}\n\nfragment StarStartupButtonFragment on Startup {\n  id\n  currentUserHasStarred\n  __typename\n}\n\nfragment JobListingListFragment on JobListing {\n  id\n  createdAt\n  autoPosted\n  atsSource\n  description\n  jobType\n  liveStartAt\n  locationNames\n  primaryRoleTitle\n  remote\n  slug\n  title\n  ...JobListingCompensationFragment\n  __typename\n}\n\nfragment JobListingCompensationFragment on JobListingBaseInterfaceType {\n  id\n  compensation\n  estimatedSalary\n  equity\n  usesEstimatedSalary\n  __typename\n}\n\nfragment FeaturedContentFragment on FeaturedContent {\n  id\n  title\n  description\n  items {\n    ... on StartupSearchResult {\n      ...FeaturedStartupSearchResultFragment\n      __typename\n    }\n    ... on Startup {\n      ...FeaturedStartupFragment\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment FeaturedStartupSearchResultFragment on StartupSearchResult {\n  ...StartupHeaderSearchResultFragment\n  highlightedJobListings {\n    ...JobListingListSearchResultFragment\n    __typename\n  }\n  __typename\n}\n\nfragment FeaturedStartupFragment on Startup {\n  id\n  ...StartupHeaderFragment\n  featuredFounder {\n    ...FeaturedFounderFragment\n    __typename\n  }\n  highlightedJobListings {\n    ...JobListingListFragment\n    __typename\n  }\n  __typename\n}\n\nfragment FeaturedFounderFragment on User {\n  id\n  name\n  avatarUrl\n  featuredPastPositions\n  curatedBio\n  __typename\n}\n",

    GLOBALS_FILTERS: {
        JOB_TITTLE_KEYWORDS: [
            "Software",
            "Developer",
            "Programmer",
            "Engineer",
            "Front-end",
            "Frontend",
            "Front End",
            "Backend",
            "Back-end",
            "BackEnd",
            "Back-End",
            "Full Stack",
            "Full-Stack",
            "Full-stack",
            "Javascript"
        ],
        JOB_TITTLE_STOPWORDS: [
            "Manager",
            "Assistant"
        ],
        JOB_BLACKLIST: [],
        COMPANY_ACRONYMS: ["LLC", "Ltd", "L.L.C"],
        IGNORED_LOCATIONS: [],
        COMPANY_STOPWORDS: [] // in the jobs description
    }
    
}