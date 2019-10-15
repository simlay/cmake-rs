var N=null,E="",T="t",U="u",searchIndex={};
var R=["config","asref","osstr","pathbuf","result","Config"];

searchIndex["cmake"]={"doc":"A build dependency for running `cmake` to build a native…","i":[[3,R[5],"cmake","Builder style configuration for a pending CMake build.",N,N],[5,"build",E,"Builds the native library rooted at `path` with the…",N,[[[R[1],["path"]],["path"]],[R[3]]]],[11,"new",E,"Creates a new blank set of configuration to build the…",0,[[[R[1],["path"]],["path"]],[R[0]]]],[11,"pic",E,"Sets flag for PIC. Otherwise use cc::Build platform default",0,[[["self"],["bool"]],[R[0]]]],[11,"generator",E,"Sets the build-tool generator (`-G`) for this compilation.",0,[[["self"],[R[2]],[R[1],[R[2]]]],[R[0]]]],[11,"cflag",E,"Adds a custom flag to pass down to the C compiler,…",0,[[["self"],[R[2]],[R[1],[R[2]]]],[R[0]]]],[11,"cxxflag",E,"Adds a custom flag to pass down to the C++ compiler,…",0,[[["self"],[R[2]],[R[1],[R[2]]]],[R[0]]]],[11,"asmflag",E,"Adds a custom flag to pass down to the ASM compiler,…",0,[[["self"],[R[2]],[R[1],[R[2]]]],[R[0]]]],[11,"define",E,"Adds a new `-D` flag to pass to cmake during the…",0,[[["self"],["k"],["v"]],[R[0]]]],[11,"register_dep",E,"Registers a dependency for this compilation on the native…",0,[[["self"],["str"]],[R[0]]]],[11,"target",E,"Sets the target triple for this compilation.",0,[[["self"],["str"]],[R[0]]]],[11,"no_build_target",E,"Disables the cmake target option for this compilation.",0,[[["self"],["bool"]],[R[0]]]],[11,"host",E,"Sets the host triple for this compilation.",0,[[["self"],["str"]],[R[0]]]],[11,"out_dir",E,"Sets the output directory for this compilation.",0,[[["self"],[R[1],["path"]],["path"]],[R[0]]]],[11,"profile",E,"Sets the `CMAKE_BUILD_TYPE=build_type` variable.",0,[[["self"],["str"]],[R[0]]]],[11,"static_crt",E,"Configures whether the /MT flag or the /MD flag will be…",0,[[["self"],["bool"]],[R[0]]]],[11,"build_arg",E,"Add an argument to the final `cmake` build step",0,[[["self"],[R[2]],[R[1],[R[2]]]],[R[0]]]],[11,"env",E,"Configure an environment variable for the `cmake`…",0,[[["self"],["k"],["v"]],[R[0]]]],[11,"build_target",E,"Sets the build target for the final `cmake` build step,…",0,[[["self"],["str"]],[R[0]]]],[11,"uses_cxx11",E,"Alters the default target triple on OSX to ensure that…",0,[[["self"]],[R[0]]]],[11,"always_configure",E,"Forces CMake to always run before building the custom…",0,[[["self"],["bool"]],[R[0]]]],[11,"very_verbose",E,"Sets very verbose output.",0,[[["self"],["bool"]],[R[0]]]],[11,"build",E,"Run this configuration, compiling the library with all the…",0,[[["self"]],[R[3]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[],[U]]],[11,"try_from",E,E,0,[[[U]],[R[4]]]],[11,"try_into",E,E,0,[[],[R[4]]]],[11,"borrow_mut",E,E,0,[[["self"]],[T]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,"type_id",E,E,0,[[["self"]],["typeid"]]]],"p":[[3,R[5]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);