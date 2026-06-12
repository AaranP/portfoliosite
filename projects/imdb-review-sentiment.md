---
id: imdb-review-sentiment
name: IMDB Review Sentiment Analysis
type: course
course: CPEN 355                 # report PDF in repo is named Cpen355_binary_classification_final_report
start: 2024-01                   # TODO: confirm — repo uploaded 2024-05, term project likely Jan–Apr 2024
end: 2024-04
status: completed
team_size: 1                     # TODO: confirm solo vs team
my_role: ""
domains: [machine-learning, data-science]
tech: [Python, scikit-learn, Jupyter, Pandas]
repo: https://github.com/AaranP/IMDB_Review_Sentiment
demo: ""
summary: >
  Binary sentiment classification of 50k IMDB movie reviews comparing a
  grid-search-tuned Logistic Regression against a Random Forest baseline on
  TF-IDF features plus a custom polarity feature.
problem: >
  Predict positive/negative sentiment from raw review text, and quantify
  which classical ML approach performs better on the task.
outcomes:
  - text: "Tuned Logistic Regression (C=3.5) reached accuracy 0.8816, precision 0.8745, recall 0.8932, F1 0.8838, outperforming the Random Forest baseline."
    evidence: repo README results section; Cpen355_binary_classification_final_report.pdf
media:
  - file: model-comparison.png
    caption: Tuned Logistic Regression vs Random Forest classifier comparison
related_experience: []
resume_bullets: []
featured: false
visibility: public
---

## What I built

End-to-end classical NLP pipeline in a Jupyter notebook: preprocessing
(tokenization, stop-word removal, lemmatization), TF-IDF feature extraction,
plus an engineered one-hot polarity feature based on predefined positive/
negative word lists. 80:20 train/test split, grid-search hyperparameter
tuning, and evaluation on accuracy/precision/recall/F1 for both Logistic
Regression and Random Forest (experience bank P8).

## What I learned

TODO: fill in — e.g. why linear models beat trees on high-dimensional sparse
TF-IDF features, what the engineered polarity feature contributed.
