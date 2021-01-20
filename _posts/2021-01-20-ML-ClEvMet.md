---
layout: post
title: "Classification Evaluation Metrices"
subtitle: "precision, recall, etc..."
categories: study
tags: machinelearning
comments: true
---

## Precision & Recall

![Precision & Recall](/assets/img/study/ML/Precisionrecall.svg)

## Precision

In a classification task, the **Precision** for a class is the number of true positives  
divided by the total number of elements labelled as belonging to the positive class  
![Precision](/assets/img/study/ML/Precision.png)

## Recall

**Recall** is defined as the number of true positives  
divided by the total number of elements that actually belong to the positive class  
![Recall](/assets/img/study/ML/Recall.png)

## Precision-Recall Trade-off

![Precision-Recall Trade-off](/assets/img/study/ML/precision-recall-tradeoff.png)

In an ideal scenario is both precision and recall can get maximum value 1.0  
But in most of practical situations,  
there is noise in the dataset and the dataset is not perfectly separable.

## Accuracy

Precision and recall use only True situation, But we can think about false  
Accuracy uses False situation  
![Accuracy](/assets/img/study/ML/Accuracy.png)

Accuracy is an evaluation metric that can most intuitively represent the performance of the model. However, there is something to consider. _Bias of domain_  
Therefore, we need a metric to supplement this.

## F1 Score

F1 score is the harmonic mean of Precision and Recall.  
![F1-score](/assets/img/study/ML/F1score.png)
When the data label is unbalanced, F1 score can evaluate with just one number.
