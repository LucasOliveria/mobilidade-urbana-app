-- CreateTable
CREATE TABLE "routes_info" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "starting_point" TEXT NOT NULL,
    "arrival_point" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routes_info_pkey" PRIMARY KEY ("id")
);
