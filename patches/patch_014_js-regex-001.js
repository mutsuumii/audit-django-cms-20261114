# ReDoS via backtracking regex
# CWE-1333 | Severity: MEDIUM
# File: cms/static/cms/js/libs/jquery.min.js line 4

**Risk:** User-controlled regex can cause catastrophic backtracking, stalling the event loop.

**Fix:** Never build regex from user input. If needed, limit input length and use safe-regex library.
