# Discrete Mathematics Proofs - Comprehensive Study Guide

---

## Table of Contents
1. [Important Terms and Definitions](#important-terms-and-definitions)
2. [Types of Proofs Overview](#types-of-proofs-overview)
3. [Direct Proofs](#direct-proofs)
4. [Proof by Contraposition](#proof-by-contraposition)
5. [Proof by Contradiction](#proof-by-contradiction)
6. [Proof by Cases](#proof-by-cases)
7. [Mathematical Induction](#mathematical-induction)
8. [Existence and Uniqueness Proofs](#existence-and-uniqueness-proofs)
9. [Counterexamples](#counterexamples)
10. [Practice Problems with Solutions](#practice-problems-with-solutions)

---

## Important Terms and Definitions

| Term | Definition |
|------|------------|
| **Proposition** | A declarative statement that is either true or false, but not both |
| **Theorem** | A statement that has been proven to be true using logical reasoning |
| **Lemma** | A "helper" theorem used to prove a more significant theorem |
| **Corollary** | A result that follows directly from a theorem with little or no additional proof |
| **Conjecture** | A statement believed to be true but not yet proven |
| **Axiom/Postulate** | A statement accepted as true without proof; serves as a starting point |
| **Hypothesis** | The "if" part of a conditional statement; the given assumption |
| **Conclusion** | The "then" part of a conditional statement; what we want to prove |
| **Premise** | A statement assumed to be true in an argument |
| **Logical Argument** | A sequence of statements where the final statement follows from previous ones |
| **Implication (P → Q)** | "If P, then Q" - Q must be true whenever P is true |
| **Contrapositive** | The statement ¬Q → ¬P, logically equivalent to P → Q |
| **Converse** | The statement Q → P, NOT logically equivalent to P → Q |
| **Inverse** | The statement ¬P → ¬Q, NOT logically equivalent to P → Q |
| **Negation** | The opposite truth value of a statement; denoted ¬P or ~P |
| **Universal Quantifier (∀)** | "For all" - statement holds for every element in the domain |
| **Existential Quantifier (∃)** | "There exists" - at least one element satisfies the statement |
| **Predicate** | A statement containing variables that becomes a proposition when values are assigned |
| **Domain of Discourse** | The set of all possible values for variables in a statement |
| **Tautology** | A compound proposition that is always true regardless of truth values |
| **Contradiction** | A compound proposition that is always false |
| **Biconditional (P ↔ Q)** | "P if and only if Q" - both have the same truth value |
| **Q.E.D.** | "Quod Erat Demonstrandum" - marks the end of a proof ("what was to be shown") |

---

## Types of Proofs Overview

| Proof Type | When to Use | Key Strategy | Starting Point |
|------------|-------------|--------------|----------------|
| **Direct Proof** | Proving P → Q straightforwardly | Assume P, derive Q | Assume hypothesis is true |
| **Contraposition** | When ¬Q → ¬P is easier to prove | Prove contrapositive | Assume conclusion is false |
| **Contradiction** | When direct approach is difficult | Assume negation, find contradiction | Assume statement is false |
| **Cases** | When different scenarios require different arguments | Split into exhaustive cases | Identify all possible cases |
| **Induction** | Proving statements about all positive integers | Base case + inductive step | Prove for n=1 (or base) |
| **Existence** | Proving something exists | Find or construct an example | Construct or identify witness |
| **Uniqueness** | Proving exactly one thing exists | Show existence + show uniqueness | Assume two exist, show equal |
| **Counterexample** | Disproving