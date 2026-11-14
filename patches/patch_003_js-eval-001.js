# Code injection via eval()
# CWE-95 | Severity: CRITICAL
# File: cms/tests/frontend/unit/helpers/fixture.js line 95

**Risk:** eval() with dynamic input runs arbitrary JavaScript.

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
