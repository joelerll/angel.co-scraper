const { URL, DEFAULT_QUERY, GLOBALS_FILTERS } = require("../config");

module.exports = {
    QueryCompanies: () => {
        return {   
            "operationName": "JobSearchResultsX",
            "variables": 
                {
                    "filterConfigurationInput": 
                        {   
                            "page": 1, 
                            "sortBy": "LAST_POSTED",
                            "remoteCompanyLocationTagIds": ["1683"],
                            "roleTagIds": ["151647"],
                            // "locationTagIds": ["1688"], // this change by location in filter
                            "jobTypes": ["full_time"],
                            "daysSinceStartupLastActive": 30,
                            "excludedKeywords": GLOBALS_FILTERS.JOB_TITTLE_STOPWORDS, // 2.
                            "skillTagIds":["17000"],
                            "equity":
                                {
                                    "min":null,
                                    "max":null
                                },
                            "keywords": GLOBALS_FILTERS.JOB_TITTLE_KEYWORDS, // 1.
                            "remotePreference":"REMOTE_OPEN",
                            "salary":{"min": null,"max": null},
                            "yearsExperience":
                                {
                                    "min": null,
                                    "max": null
                                }
                            }
                        },
            "query": DEFAULT_QUERY
        }
    }
}