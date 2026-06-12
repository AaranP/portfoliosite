---
id: conditional-pixelcnn
name: Conditional PixelCNN++ for Generation & Classification
type: course
course: CPEN 455
start: 2025-01                   # 2024W2 term; repo created 2025-03
end: 2025-04
status: completed
team_size: 1                     # course required individual work
my_role: ""
domains: [machine-learning, deep-learning, generative-models]
tech: [Python, PyTorch, Weights & Biases]
repo: https://github.com/AaranP/pixelcnn
demo: ""
summary: >
  Extended an unconditional PixelCNN++ into a class-conditional generative
  model in PyTorch, used both for image generation and zero-shot
  classification via per-class likelihoods.
problem: >
  Adapt PixelCNN++ (an autoregressive generative model) to condition on
  class labels, so one trained model can both generate class-specific images
  and classify images by comparing conditional likelihoods — graded on FID
  for generation and accuracy for classification.
outcomes:
  - text: Implemented label conditioning with a U-Net-style encoder-decoder extension and compared fusion strategies, with ablation studies and Bits-Per-Dimension / accuracy evaluations.
    evidence: cpen455_final_project_report.pdf in repo (abstract & architecture sections)
  - text: "TODO: final test accuracy and FID score (in the report/leaderboard — fill in actual numbers)."
    evidence: cpen455_final_project_report.pdf
media:
  - file: cpen455-report.pdf
    caption: Final project report (NeurIPS format)
related_experience: []
resume_bullets: []
featured: true
visibility: public
---

## What I built

Starting from the course-provided unconditional PixelCNN++ codebase, I
implemented the conditional extension: class-embedding injection into the
network (multiple fusion strategies compared), a U-Net-style encoder-decoder
structure with skip connections for multi-scale conditioning, training on
the provided 4-class dataset, and the two graded evaluation paths —
class-conditional sample generation (FID-scored) and zero-shot
classification by evaluating the likelihood of an image under each class
condition.

Note: much of the repo is course scaffolding (the README is the assignment
spec); my work lives in the model/conditioning code and the report.

## What I learned

TODO: fill in — e.g. why masked convolutions preserve the autoregressive
property, fusion-strategy trade-offs found in the ablations, training
stability of autoregressive models.
